<br/>
<p align="center">
  <a href="https://github.com/divyansharma001/FoodFly">
    <img src="./public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">FoodFly</h3>

  <p align="center">
    This repository houses a dynamic e-commerce web application developed using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). It offers essential features such as cart management, secure payment gateway integration, and data validation through Express. Built for a seamless shopping experience
    <br/>
    <br/>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/divyansharma001/FoodFly?color=dark-green) ![Forks](https://img.shields.io/github/forks/divyansharma001/FoodFly?style=social) ![Stargazers](https://img.shields.io/github/stars/divyansharma001/FoodFly?style=social) ![Issues](https://img.shields.io/github/issues/divyansharma001/FoodFly) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Authors](#authors)

## About The Project

![image](https://github.com/divyansharma001/FoodFly/assets/140371139/f9e3bca1-2ad2-4315-9a89-fac1d351a647)
![image](https://github.com/divyansharma001/FoodFly/assets/140371139/9ae796a4-98a2-4e0f-ac77-01babe8f46d3)
![image](https://github.com/divyansharma001/FoodFly/assets/140371139/98a63d47-3569-4a65-a985-80566076d5c7)
![image](https://github.com/divyansharma001/FoodFly/assets/140371139/419bd8da-e050-4019-a7f9-7c8bd8926bb5)
![image](https://github.com/divyansharma001/FoodFly/assets/140371139/da542ca3-fe36-42c9-8b30-077ee9da3cc4)
FoodFly App Demo([Video link](https://vimeo.com/928677315?share=copy))


**Craving Convenience? Order Food Seamlessly with FoodFly!**

FoodFly is a user-friendly web application built with cutting-edge technology to revolutionize your food ordering experience. Developed with the PERN stack (PostgreSQL, Express.js, React.js, Node.js), it offers a secure and feature-rich platform to browse menus, customize your order, and enjoy delicious food delivered straight to your doorstep.

**Key Features to Tantalize Your Taste Buds:**

  * **Explore a Culinary World:** Dive into a diverse menu overflowing with mouthwatering dishes across various categories. Detailed descriptions and enticing images will make choosing your next meal a breeze.
  * **Effortless Order Management:** Craft your perfect feast! Add items to your cart, adjust quantities with ease, and remove unwanted selections before placing your order.
  * **Pay with Confidence:** Our secure payment gateway, powered by Stripe, ensures a smooth and safe transaction process for worry-free ordering.
  * **Data Integrity on Point:** Express Validator acts as your guardian, guaranteeing accurate user inputs for a seamless and reliable experience.
  * **Unbreakable Security:** Rest assured, your information is protected. JWT authentication keeps unauthorized users at bay, while bcrypt encryption safeguards your password.



**Get Started and Devour Deliciousness:**

1. **Clone the Repository:** Bring [App Name] to your local machine.
2. **Database Setup:** Configure your PostgreSQL database for a secure connection.
3. **Installation Power:** Navigate to the project directory and unleash the magic with `npm install`.
4. **Backend Activation:** Fire up the server using `npm start`.
5. **Frontend Unleashed:** Head over to the client directory and launch the frontend with `npm run dev`.

**Become a Part of the Foodie Revolution!**

We welcome your contributions! Encountered a bug? Have a feature suggestion? Open an issue and let us know. Feel free to submit pull requests that adhere to our established coding standards and guidelines. Together, let's make food ordering an even more delightful experience!


## Built With


**Technologies Used:**

* **Frontend:**
    * **React.js:**  A powerful JavaScript library for building dynamic and user-friendly interfaces.
    * **Vite:** This lightning-fast bundler offers an exceptional development experience with features like instant hot module replacement (HMR) for accelerated development cycles.  
    * **Tailwind CSS:** A utility-first CSS framework that empowers rapid UI development by providing pre-designed utility classes for styling elements without writing extensive custom CSS.

* **Backend:**
    * **Node.js:** A JavaScript runtime environment that empowers the creation of scalable and efficient server-side applications.
    * **Express.js:** A popular web framework for Node.js that simplifies building APIs and web applications.

* **Database:**
    * **PostgreSQL:**  A robust and open-source object-relational database management system (ORDBMS) that excels in handling complex data models and high-volume workloads.

* **Payment Gateway:**
    * **Stripe:** A secure and reliable payment processing platform that facilitates seamless online transactions.

* **Validation:**
    * **Express Validator:**  A middleware library for Express.js that streamlines data validation on the server-side, ensuring data integrity and preventing invalid inputs.

* **Authentication:**
    * **JSON Web Tokens (JWT):**  An industry-standard authentication mechanism that offers a secure way to manage user sessions and access control.

* **Encryption:**
    * **Bcrypt:**  A time-tested password hashing function that safeguards user passwords by securely storing them in an encrypted format.


## Getting Started

This guide will walk you through setting up and running the food ordering web application locally on your machine. 
To get a local copy up and running follow these simple example steps.

### Prerequisites

* Node.js and npm (or yarn) installed on your system. You can download them from the official Node.js website [https://nodejs.org/en](https://nodejs.org/en).

### Installation


**Steps:**

1. **Clone the Repository:**

   Open your terminal and navigate to the directory where you want to clone the project. Then, use the following command to clone the repository:

   ```bash
   git clone https://<repository_url>.git
   ```

   Replace `<repository_url>` with the actual URL of your project's Git repository.

2. **Set Up Database:**

   This project utilizes PostgreSQL as the database. You'll need to configure your local PostgreSQL instance or set up a new one. 

   * **Using an existing PostgreSQL instance:**

      Ensure your PostgreSQL server is running and accessible. You'll need to update the configuration files (`.env` files) within the project to reflect your specific database details like hostname, port, username, and password.

   * **Setting up a new PostgreSQL instance:**

     There are various options for setting up a local PostgreSQL instance. You can use tools like pgAdmin or Docker to manage your database. 
     * Refer to the PostgreSQL documentation [https://www.postgresql.org/docs/current/index.html](https://www.postgresql.org/docs/current/index.html) for detailed instructions on installation and configuration.

3. **Install Dependencies:**

   Navigate to the project's root directory and run the following command to install all the required dependencies:

   ```bash
   npm install
   ```

   (If you prefer yarn, use `yarn install` instead)

4. **Start the Servers:**

   The application uses separate servers for the frontend and backend. 

   * **Backend Server:**

     In the project's root directory, run the following command to start the backend server:

     ```bash
     npm start
     ```

   * **Frontend Server:**

     Navigate to the `client` directory within the project and run the following command to start the frontend server:

     ```bash
     npm start
     ```

5. **Access the Application:**

   Once the servers are running, you should see messages indicating successful startup in your terminal. Open your web browser and navigate to `http://localhost:3000` (the default port may vary depending on your configuration). This should display the food ordering application interface.

**Additional Notes:**

* You may need to adjust the configuration files (`.env`) in both the frontend and backend directories to reflect your specific environment settings. 
* Refer to the project's documentation (if available) for additional setup instructions or configuration options. 



## Usage

This web application allows users to browse menus, customize orders, and securely place food deliveries. Here's a breakdown of its functionalities:

**For Users:**

1. **Browsing Menus:** 
    * Explore a diverse menu categorized for easy navigation.
    * View detailed descriptions and enticing images of each food item.

2. **Effortless Ordering:**
    * Add your desired food items to your cart with a simple click.
    * Modify quantities of each item to adjust your order.
    * Remove unwanted items from your cart before finalizing the order.

3. **Secure Payment Processing:**
    * The application integrates with Stripe, a secure payment gateway. 
    * Enjoy a seamless and safe transaction process for worry-free payments.

4. **User Account Management (Optional):**
    * Depending on the application's implementation, you might be able to create an account for features like:
        * Saving your delivery information for faster checkout.
        * Tracking past orders and reorder history.

**Ordering Process:**
1. Browse the menu and add your desired food items to the cart.
2. Review your cart contents, including quantities and any special instructions.
3. Proceed to checkout, where you'll be prompted to enter your delivery information (if not using a saved address).
4. Choose your preferred payment method and securely complete the transaction through Stripe.

**Additional Functionalities:**
* **Order History:**  View your past orders and reorder your favorites with ease (if using a user account).


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/divyansharma001/FoodFly/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/divyansharma001/FoodFly/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

Are you passionate about delicious food and cutting-edge technology? Do you have a knack for writing clean code and building user-friendly interfaces? Then we invite you to join the development of this exciting food ordering web application!

**Here's How You Can Contribute:**

1. **Report Issues:** Encountered a bug that's hindering the ordering experience? Found a broken feature? Open an issue on the project's repository and help us identify areas for improvement. Clearly describe the issue and provide any relevant details to assist in troubleshooting.

2. **Suggest Enhancements:** Do you have a brilliant idea for a new feature that could elevate the app's functionality? Share your suggestions through feature requests on the repository. Describe your vision and explain how your proposed feature would benefit users.

3. **Contribute Code:** We welcome pull requests from skilled developers who want to contribute to the codebase. Ensure your code adheres to the project's coding standards and guidelines (refer to the documentation if available). Write clean, well-documented code that adheres to best practices.

**Before You Dive In:**

* **Familiarize Yourself with the Codebase:** Take some time to explore the project's structure, technologies used, and overall architecture. This will provide a solid foundation for your contributions.
* **Communicate Effectively:**  Clearly explain your contributions in issues and pull requests.  Actively participate in discussions and provide helpful feedback to others.

**What You'll Gain:**

* **Make a Difference:**  Be part of building a user-friendly and efficient food ordering platform that benefits everyone.
* **Enhance Your Skills:** Hone your coding skills, explore new technologies, and gain valuable experience in a collaborative development environment.
* **Build Your Portfolio:** Showcase your contributions to potential employers and demonstrate your passion for open-source development.

**Join the Community:**

We believe in fostering a collaborative and inclusive development environment. We encourage you to connect with other developers, share your ideas, and learn from each other. Together, we can create the ultimate food ordering experience!

**Ready to Contribute?**

Head over to the project's repository and let's get started! We appreciate your interest and look forward to your valuable contributions.


## Authors

* **Divyansh Sharma** - *Information Tech. Student* - [Divyansh Sharma](https://github.com/divyansharma001) - *Web Developer*


