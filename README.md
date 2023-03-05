# Smart Cashier

# 1. SUMMARY
This repository for Smart AI cashier chatbot porject in Waynehack 2023.  
by @YoshimasaIwano and @Kaiyu0128.  

# 2. Contribution List
- Setting up AWS for deploying the our product
- Creating React App and connecting it with Flask. 
- Thinking what we will create and talking about it if it's possible in two days. 
- Getting OpenAI API key and developing a basic chatbot. 
- Improving UI/UX by attemping any possible test cases.

# 3. Nagivation to Our Project
# 3.1 Our Repository  
Here is the link for our page.  
https://waynehackingfsu.net/  
  
The structure of our repository is as follow.
- **frontend**
    - public: index.html and others files for web page
    - src: our source files  
        -  components: typescript files for each page or each purpose
- **backend**  
    server.py: This is for deploying on our web site on AWS  
    
# 3.2 How to Start  
1.  Clone our repository and `cd frontend` or `cd backend` according to the purpose  
2.  Developing Environment 
For frontend, you can start 
`npm start`   
  
For backend, You should edit the last part of server.py  
```
if __name__ == "__main__":
    app.debug = True
    PORT = os.environ.get('PORT','5000')
    print("runing on: ", PORT)
    app.run()
 ```  
 3.  Deplyment Environment 
 For frontend, you should static versuion files by this command.
`npm run build`  
  
For backend, you should edit the last part of server.py  
```
if __name__ == "__main__":
    app.debug = False
    PORT = os.environ.get('PORT','5000')
    print("runing on: ", PORT)
    serve(app, port=PORT)
 ```   
 
 
This is the reference for React App.  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
