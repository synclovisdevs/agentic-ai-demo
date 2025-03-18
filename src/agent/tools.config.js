/**
 * @author Anooj Krishnan
 * @description This is the tools configuration for the Synclovis AI Assistant.
 * @since 1.0.0
 * @license MIT
 * @see https://synclovis.com
 */

export const toolsConfig = [
    {
        type: "function",
        function: {
            name: "getTodayDate",
            description: "Get today's date",
            parameters: {
                type: "object",
                properties: {}
            }
        }
    },
    {
        type: "function",
        function: {
            name: "getWeekFromDate",
            description: "Get the week day from a date",
            parameters: {
                type: "object",
                properties: {
                    date: {
                        type: "string",
                        description: "Date in YYYY-MM-DD format"
                    }
                },
                required: ["date"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "getOfficeHours",
            description: "Get the office hours",
            parameters: {
                type: "object",
                properties: {}
            }
        }
    },
    {
        type: "function",
        function: {
            name: "getHRAvailability",
            description: "Get the HR availability",
            parameters: {
                type: "object",
                properties: {
                    week: {
                        type: "string",
                        description: "Day of the week (Monday, Tuesday, etc.)"
                    }
                },
                required: ["week"]
            }
        }
    },
    {
        type: "function",
        function: {
            name: "getHRContact",
            description: "Get the HR contact",
            parameters: {
                type: "object",
                properties: {}
            }
        }
    },
    {
        type: "function",
        function: {
            name: "getServicesOffered",
            description: "Get the services offered",
            parameters: {
                type: "object",
                properties: {}
            }
        }
    },
    {
        type: "function",
        function: {
            name: "requestAppointment",
            description: "Request an appointment with the company",
            parameters: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Name of the person requesting the appointment"
                    },
                    email: {
                        type: "string",
                        description: "Email address of the person"
                    },
                    phone: {
                        type: "string",
                        description: "Phone number of the person"
                    },
                    date: {
                        type: "string",
                        description: "Preferred date for the appointment (YYYY-MM-DD format)"
                    },
                    time: {
                        type: "string",
                        description: "Preferred time for the appointment (HH:MM format)"
                    }
                },
                required: ["name", "email", "phone", "date", "time"]
            }
        }
    }
]; 