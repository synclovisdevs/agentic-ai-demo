# Synclovis AI Assistant

An intelligent command-line AI assistant powered by GPT-4 that helps users interact with Synclovis company services, schedule appointments, and get information about office hours and HR availability.

## Features

- 🤖 Powered by OpenAI GPT-4
- 🕒 Check office hours and HR availability
- 📋 Get information about company services
- 📞 Access HR contact details
- 📅 Schedule appointments
- 📧 Automated email notifications for appointments
- 📆 Date and weekday utilities
- 💬 Natural language interaction

## Demo

Watch how the Synclovis AI Assistant handles various queries and tasks:

[![Synclovis AI Assistant Demo](https://img.youtube.com/vi/03ytP-FopuM/0.jpg)](https://youtu.be/03ytP-FopuM)

This demo shows:
- Checking office hours and HR availability
- Getting company service information
- Scheduling appointments
- Email notifications
- Natural conversation flow

## Prerequisites

- Node.js (v20.0.0 or higher)
- npm (Node Package Manager)
- OpenAI API key
- SMTP email server credentials

## Installation

1. Clone the repository:

```bash
git clone https://github.com/synclovisdevs/agentic-ai-demo
cd agentic-ai-demo
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
OPENAI_API_KEY=your_openai_key_here
EMAIL_HOST=your_smtp_host
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
EMAIL_TO=recipient_email
EMAIL_FROM=sender_email
```

4. Start the application:
```bash
npm start
```

## Example Interactions

1. Check Office Hours:
```
> How can I help you? What are your office hours?
Assistant: Let me check our office hours for you...
[Shows office hours for each weekday]
```

2. Inquire About Services:
```
> How can I help you? What services do you offer?
Assistant: Here are the services we offer at Synclovis...
[Lists all available services]
```

3. Check HR Availability:
```
> How can I help you? Is HR available today?
Assistant: Let me check HR availability for today...
[Shows HR availability]
```

4. Schedule an Appointment:
```
> How can I help you? I'd like to schedule an appointment
Assistant: I'll help you schedule an appointment. First, let me check HR availability...
[Guides through appointment booking process]
```

## Project Structure

```
src/
├── agent/
│   ├── agent.js         # Main AI agent logic
│   └── tools.config.js  # Tool configurations
├── config/
│   ├── email.config.js  # Email configuration
│   └── openai.config.js # OpenAI configuration
├── constants/
│   └── company.constants.js # Company data
├── services/
│   ├── date.service.js  # Date utilities
│   └── email.service.js # Email functionality
├── tools/
│   ├── appointment.tools.js # Appointment functions
│   └── office.tools.js     # Office information functions
└── index.js            # Application entry point
```


## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| OPENAI_API_KEY | Your OpenAI API key | Yes |
| EMAIL_HOST | SMTP server host | Yes |
| EMAIL_USER | Email username | Yes |
| EMAIL_PASS | Email password | Yes |
| EMAIL_TO | Default recipient email | Yes |
| EMAIL_FROM | Sender email address | Yes |




## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Anooj Krishnan**  
Synclovis Systems

## Support

For support, email contact@synclovis.com or raise an issue in the repository.



---

For more information, visit [https://synclovis.com](https://synclovis.com)



