# This a miniproject that integrates Kenyan Safaricom Lipa Na Mpesa API for payment.

This is a MERN Stack project that uses Express and Node for backend and React on the frontend: You should also have ngrok install to set up a callback url so that the payments made by the user are saved back to the local database that is the MongoDb that has been used for this project. The user payment number has been masked just for security reason but you can feel free to unmask them for your own use say when making an order once its integrated on an Ecommerce App.

## How to set up this project.

After you clone or download this project to your local directory, you can run:

### `npm install`

CD to each project folder and run npm install to get all your dependencies set up for the project.


### `Ngrok`

Once you install ngron and configure it right, the next assignment is to open in to the port your backend server is running on for instance **ngrok http 8000**

### `Project Screenshot`
**Home Page**
![Home](https://github.com/fkiptooh/React-MPESA/blob/master/client/screenshots/homepage.png)

**Stk Push For User To Enter Pin**
![STK PUSH](https://github.com/fkiptooh/React-MPESA/blob/master/client/screenshots/stkpush.png)

**Payment Success**
![Success](https://github.com/fkiptooh/React-MPESA/blob/master/client/screenshots/payment_success.png)

**Transaction Populated**
![Transaction](https://github.com/fkiptooh/React-MPESA/blob/master/client/screenshots/transaction_saved_to_db.png)

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
