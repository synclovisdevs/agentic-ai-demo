
/**
 * @author Anooj Krishnan
 * @description This is the company data for the Synclovis AI Assistant.
 * @since 1.0.0
 * @license MIT
 * @see https://synclovis.com
 */

import { COMPANY_DATA } from '../constants/company.constants.js';

export const officeTools = {
    getOfficeHours() {
        return COMPANY_DATA.officeHours;
    },

    getHRAvailability(week) {
        return COMPANY_DATA.hrAvailability[week];
    },

    getHRContact() {
        return COMPANY_DATA.hrContact;
    },

    getServicesOffered() {
        return COMPANY_DATA.services;
    }
}; 