import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { ContactForm, ApiResponse } from '../../lib/types';

// Email transporter configuration
const createTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP credentials not configured');
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Input sanitization
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

// Email templates
const createMainEmailTemplate = (data: ContactForm) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nuevo mensaje desde tu portafolio</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0;
          background-color: #f5f5f5;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(135deg, #00bfff, #0099cc); 
          color: white; 
          padding: 24px; 
          text-align: center; 
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content { 
          padding: 24px; 
        }
        .field { 
          margin-bottom: 20px; 
        }
        .label { 
          font-weight: 600; 
          color: #555; 
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          display: block;
        }
        .value { 
          background: #f8fafc; 
          padding: 12px 16px; 
          border-left: 4px solid #00bfff; 
          border-radius: 4px;
          font-size: 16px;
          line-height: 1.5;
        }
        .footer { 
          background: #1e1e1e; 
          color: #cfcfcf; 
          padding: 20px; 
          text-align: center; 
          font-size: 14px; 
        }
        .footer a {
          color: #00bfff;
          text-decoration: none;
        }
        .message-content {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💌 Nuevo mensaje desde tu portafolio</h1>
          <p style="margin: 8px 0 0 0; opacity: 0.9;">Has recibido un mensaje a través de antoniomora.dev</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">👤 Nombre</span>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <span class="label">📧 Email</span>
            <div class="value">
              <a href="mailto:${data.email}" style="color: #00bfff; text-decoration: none;">
                ${data.email}
              </a>
            </div>
          </div>
          
          ${data.company ? `
          <div class="field">
            <span class="label">🏢 Empresa</span>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">📋 Asunto</span>
            <div class="value">${data.subject}</div>
          </div>
          
          <div class="field">
            <span class="label">💬 Mensaje</span>
            <div class="value message-content">${data.message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Este mensaje fue enviado desde <a href="https://antoniomora.dev">antoniomora.dev</a></p>
          <p>Fecha: ${new Date().toLocaleDateString('es-CR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const createConfirmationEmailTemplate = (name: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Mensaje recibido - Antonio Mora</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0;
          background-color: #f5f5f5;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(135deg, #00bfff, #0099cc); 
          color: white; 
          padding: 24px; 
          text-align: center; 
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content { 
          padding: 24px; 
          line-height: 1.7;
        }
        .footer { 
          background: #1e1e1e; 
          color: #cfcfcf; 
          padding: 20px; 
          text-align: center; 
          font-size: 14px; 
        }
        .footer a {
          color: #00bfff;
          text-decoration: none;
        }
        .cta-buttons {
          margin: 24px 0;
          text-align: center;
        }
        .button {
          display: inline-block;
          background: #00bfff;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          margin: 0 8px 8px 0;
          font-weight: 600;
        }
        .button:hover {
          background: #0099cc;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ ¡Mensaje recibido!</h1>
          <p style="margin: 8px 0 0 0; opacity: 0.9;">Gracias por contactarme</p>
        </div>
        
        <div class="content">
          <p><strong>Hola ${name},</strong></p>
          
          <p>He recibido tu mensaje y te responderé lo antes posible, generalmente dentro de las próximas 24 horas.</p>
          
          <p>Mientras tanto, puedes:</p>
          <ul>
            <li>Revisar mis proyectos en <a href="https://github.com/antoniomora" style="color: #00bfff;">GitHub</a></li>
            <li>Conectar conmigo en <a href="https://linkedin.com/in/antoniomora" style="color: #00bfff;">LinkedIn</a></li>
            <li>Enviarme un mensaje directo por <a href="https://wa.me/50689761010" style="color: #00bfff;">WhatsApp</a></li>
          </ul>
          
          <div class="cta-buttons">
            <a href="https://wa.me/50689761010" class="button">💬 WhatsApp</a>
            <a href="https://linkedin.com/in/antoniomora" class="button">💼 LinkedIn</a>
          </div>
          
          <p>¡Gracias por tu interés!</p>
          
          <p>
            Saludos,<br>
            <strong>Antonio Mora</strong><br>
            <em>Ingeniero de Software</em>
          </p>
        </div>
        
        <div class="footer">
          <p><strong>Antonio Mora</strong> | Desarrollador Full Stack</p>
          <p>
            📧 <a href="mailto:antonio.mora@email.com">antonio.mora@email.com</a> | 
            📱 <a href="https://wa.me/50689761010">+506 8976 1010</a>
          </p>
          <p>🌐 <a href="https://antoniomora.dev">antoniomora.dev</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// POST handler for contact form
export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // Verify environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service configuration not available' 
        },
        { status: 500 }
      );
    }

    // Parse request body
    const body: ContactForm = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'All required fields must be completed' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 2000) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Message is too long (max 2000 characters)' 
        },
        { status: 400 }
      );
    }

    // Sanitize input data
    const sanitizedData: ContactForm = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      company: company ? sanitizeInput(company) : '',
      subject: sanitizeInput(subject),
      message: sanitizeInput(message)
    };

    // Create email transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Main email (to you)
    const mainMailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `💼 Nuevo mensaje desde portfolio: ${sanitizedData.subject}`,
      html: createMainEmailTemplate(sanitizedData),
      replyTo: sanitizedData.email,
      priority: 'high' as const
    };

    // Confirmation email (to sender)
    const confirmationMailOptions = {
      from: `"Antonio Mora" <${process.env.SMTP_USER}>`,
      to: sanitizedData.email,
      subject: '✅ Mensaje recibido - Antonio Mora',
      html: createConfirmationEmailTemplate(sanitizedData.name)
    };

    // Send both emails concurrently
    const [mainEmailResult, confirmationEmailResult] = await Promise.allSettled([
      transporter.sendMail(mainMailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    // Check if main email was sent successfully
    if (mainEmailResult.status === 'rejected') {
      console.error('Failed to send main email:', mainEmailResult.reason);
      throw new Error('Failed to send notification email');
    }

    // Log confirmation email failure but don't fail the request
    if (confirmationEmailResult.status === 'rejected') {
      console.error('Failed to send confirmation email:', confirmationEmailResult.reason);
    }

    // Log successful contact for analytics
    console.log(`✅ Contact form submission from ${sanitizedData.email} - Subject: ${sanitizedData.subject}`);

    // Rate limiting could be added here in production
    
    return NextResponse.json(
      { 
        success: true,
        data: { message: 'Message sent successfully' }
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Don't expose internal errors to client
    const errorMessage = error instanceof Error && error.message.includes('SMTP') 
      ? 'Email service temporarily unavailable. Please try again later.'
      : 'Internal server error. Please try again.';
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage
      },
      { status: 500 }
    );
  }
}

// GET handler for health check
export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    // Basic health check
    const isConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASS);
    
    return NextResponse.json(
      { 
        success: true,
        data: { 
          message: 'Contact API is operational',
          timestamp: new Date().toISOString(),
          configured: isConfigured
        }
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-cache'
        }
      }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Health check failed' 
      },
      { status: 500 }
    );
  }
}