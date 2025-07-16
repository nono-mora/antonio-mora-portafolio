import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuración del transportador de email
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true para 465, false para otros puertos
    auth: {
      user: process.env.SMTP_USER, // Tu email
      pass: process.env.SMTP_PASS, // Tu contraseña de aplicación
    },
  });
};

// Función para validar email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para sanitizar datos
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

// Template HTML para el email
const createEmailTemplate = (data: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nuevo mensaje desde tu portafolio</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #00bfff, #0099cc); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background: white; padding: 10px; border-left: 4px solid #00bfff; margin-top: 5px; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💌 Nuevo mensaje desde tu portafolio</h1>
          <p>Has recibido un mensaje a través de tu sitio web</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Nombre:</div>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${data.email}</div>
          </div>
          
          ${data.company ? `
          <div class="field">
            <div class="label">🏢 Empresa:</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">📋 Asunto:</div>
            <div class="value">${data.subject}</div>
          </div>
          
          <div class="field">
            <div class="label">💬 Mensaje:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Este mensaje fue enviado desde antoniomora.dev</p>
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

// Template para confirmación al remitente
const createConfirmationTemplate = (name: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Mensaje recibido - Antonio Mora</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #00bfff, #0099cc); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
        .button { display: inline-block; background: #00bfff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ ¡Mensaje recibido!</h1>
          <p>Gracias por contactarme</p>
        </div>
        
        <div class="content">
          <p>Hola ${name},</p>
          
          <p>He recibido tu mensaje y te responderé lo antes posible, generalmente dentro de las próximas 24 horas.</p>
          
          <p>Mientras tanto, puedes:</p>
          <ul>
            <li>Revisar mis proyectos en <a href="https://github.com/antoniomora">GitHub</a></li>
            <li>Conectar conmigo en <a href="https://linkedin.com/in/antoniomora">LinkedIn</a></li>
            <li>Enviarme un mensaje directo por <a href="https://wa.me/50689761010">WhatsApp</a></li>
          </ul>
          
          <p>¡Gracias por tu interés!</p>
          
          <p>Saludos,<br>
          <strong>Antonio Mora</strong><br>
          Ingeniero de Software</p>
        </div>
        
        <div class="footer">
          <p>Antonio Mora | Desarrollador Full Stack</p>
          <p>📧 antonio.mora@email.com | 📱 +506 8976 1010</p>
        </div>
      </div>
    </body>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    // Verificar que las variables de entorno estén configuradas
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Configuración de email no disponible' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validaciones
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben estar completos' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'El mensaje es demasiado largo' },
        { status: 400 }
      );
    }

    // Sanitizar datos
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      company: company ? sanitizeInput(company) : '',
      subject: sanitizeInput(subject),
      message: sanitizeInput(message)
    };

    // Crear transportador
    const transporter = createTransporter();

    // Configuración del email principal (para ti)
    const mainMailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Tu email
      subject: `💼 Nuevo mensaje desde portfolio: ${sanitizedData.subject}`,
      html: createEmailTemplate(sanitizedData),
      replyTo: sanitizedData.email
    };

    // Configuración del email de confirmación (para el remitente)
    const confirmationMailOptions = {
      from: `"Antonio Mora" <${process.env.SMTP_USER}>`,
      to: sanitizedData.email,
      subject: '✅ Mensaje recibido - Antonio Mora',
      html: createConfirmationTemplate(sanitizedData.name)
    };

    // Enviar ambos emails
    await Promise.all([
      transporter.sendMail(mainMailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    // Log para debugging (opcional)
    console.log(`Email sent from ${sanitizedData.email} - Subject: ${sanitizedData.subject}`);

    return NextResponse.json(
      { 
        message: 'Mensaje enviado exitosamente',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor. Por favor, intenta nuevamente.',
        success: false
      },
      { status: 500 }
    );
  }
}

// Método GET para verificar que la API está funcionando
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API is working',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}