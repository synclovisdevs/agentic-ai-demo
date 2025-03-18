
/**
 * @author Anooj Krishnan
 * @description This is the email service for the Synclovis AI Assistant.
 * @since 1.0.0
 * @license MIT
 * @see https://synclovis.com
 */

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { emailConfig } from '../config/email.config.js';

dotenv.config();

const requiredEnvVars = ['EMAIL_HOST', 'EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
}

const transporter = nodemailer.createTransport(emailConfig);


transporter.verify(function(error, success) {
    if (error) {
        console.error('Email transporter verification failed:', error);
    }
});

export const emailService = {
    async sendAppointmentRequest({ name, email, phone, date, time }) {
        const emailBody = `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Date: ${date}
            Time: ${time}
        `;

        try {
            if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
                throw new Error('Email credentials not configured');
            }

            const mailOptions = {
                from: `Synclovis<${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_TO,
                subject: 'Appointment Request from Agentic AI',
                text: emailBody
            };
            
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent successfully:', info.messageId);
            return { success: true, messageId: info.messageId };
        } catch (error) {
            console.error('Email sending failed:', error);
            return { 
                success: false, 
                error: error.message,
                details: 'Please check email configuration in .env file'
            };
        }
    }
}; 