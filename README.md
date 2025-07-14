# Single Page Application
This repository contains the test project for module 3, a SPA (Single Page Application) whose objective is to emulate an online event site by managing two roles: the administrator role and the regular user role. The administrator will be able to read, create, update, and delete events, while the regular user will only be able to view and register for them. All of this role stuff is handled by a login and register system.

## How to run the project
To run the project you need node.js to launch it, this is done with the following command lines:

```
npm install
```
```
npm run dev
```
```
json-server --watch ./database/db.json --port 3000
```
After this, the local host where the project was launched is opened, this can be done by Control+Click on the link in the terminal.

The project will greet you with a login screen with two text boxes, one for the email and the other for the password. If you do not have an account, you can register in the database with the button that indicates it to be redirected to the register screen to capture your data and later save them to be able to enter as a normal user. To enter as an administrator, I will leave the following credentials:

```
admin@mail.com
```
```
admin123
```

Upon entering, the user will be greeted and shown the exit button and a form in which events will be added and a list with existing events, which the admin can edit or delete as desired.

###### ®Alberto Jimenez - 2025