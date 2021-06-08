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
2. Create an account in mailgun (this step is required for the feature: send repository by e-mail).
  2.1 Create a .env file and copy in DOMAIN variable your <domain_name> and in API_KEY variable your <api_key> from mailgun.
3. Install the dependencies with the following commands:
```
  yarn or npm install
```
4. Run the application with the following commands:
```
BackEnd from server directory:
  npm run dev
  
Front-End from client directory:
  yarn start
```


---
<p align="center">Developed by Georgina Rojas :hearts:</p>

