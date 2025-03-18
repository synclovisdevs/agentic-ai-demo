/**
 * @author Anooj Krishnan
 * @description This is the appointment tools for the Synclovis AI Assistant.
 * @since 1.0.0
 * @license MIT
 * @see https://synclovis.com
 */

import { dateService } from '../services/date.service.js';
import { emailService } from '../services/email.service.js';

export const appointmentTools = {
    getTodayDate: dateService.getTodayDate,
    getWeekFromDate: dateService.getWeekDay,
    
    async requestAppointment(name, email, phone, date, time) {
        return await emailService.sendAppointmentRequest({
            name, email, phone, date, time
        });
    }
}; 