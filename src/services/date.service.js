/**
 * @author Anooj Krishnan
 * @description This is the date service for the Synclovis AI Assistant.
 * @since 1.0.0
 * @license MIT
 * @see https://synclovis.com
 */

export const dateService = {
    getTodayDate() {
        const today = new Date();
        return today.toISOString().split('T')[0];
    },

    getWeekDay(date) {
        const dateObj = new Date(date);
        const days = [
            "Sunday", "Monday", "Tuesday", "Wednesday", 
            "Thursday", "Friday", "Saturday"
        ];
        return days[dateObj.getDay()];
    }
}; 