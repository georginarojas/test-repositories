<h1 align="center" >GetRepository</h1>

<p align="center">
  <a href="#-description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#-functionalities">Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
</p>

![Demo GetRepository](https://j.gifs.com/Qk1N40.gif)

## Description
GetRepository is an application that shows  Github's public repositories. It is sorted by the number of interactions showing four repositories by page. Besides, the user can share and send by email some information like (link, name, and description) of the repository selected.

## Technologies and frameworks
- Yarn
- Npm
- JavaScript
- Typescript
- HTML
- ReactJs
- NodeJs.
- Chakra UI.
- Mailgun.
- Nodemailer


## Functionalities
- Shows a list of repositories from GitHub sorting by interactions. 
- Sends the repository selected by e-mail.

## How to run
1. Clone the repository.
2. Create an account in mailgun and register the recipients' email. You can use these links as a guide:
    1. Create account: <https://documentation.onesignal.com/docs/mailgun-setup>
    2. Register and auhtorized recipients: <https://help.mailgun.com/hc/en-us/articles/217531258-Authorized-Recipients>
> _Note. This step is required for the feature: send repository by e-mail.
>        For free plan in mailgun is required register and authorized all the recipients for send the e-mail_
4. Edit the .env.example file in the server directory for .env and copy in DOMAIN variable your <domain_name> and in API_KEY variable your <api_key> from mailgun.
5. Install the dependencies with the following commands:
```
  yarn or npm install
```
5. Run the application with the following commands:
```
BackEnd from server directory:
  npm run dev
  
Front-End from client directory:
  yarn start
```


---
<p align="center">Developed by Georgina Rojas :hearts:</p>

