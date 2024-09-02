This repository contains the code for both the backend and frontend of the EmpatheAI Application, designed to process audio inputs, transcribing speech, translating between languages, and summarizing the key points of conversations using advanced machine learning models. The application is split into two main components:

**Backend (app_backend/)** - A Flask API hosted on Google Colab, which handles audio processing, transcription tasks, and integration with AI models.

**Frontend (app_frontend/)** - A React-based user interface built to allow users to upload audio files and view the transcribed text.



**Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


**Prerequisites**
- Python 3.8+
- pip
- Node.js and npm


**Installation**

First, clone the repository to your local machine:
```
git clone https://git.cs.bham.ac.uk/projects-2023-24/ixd368.git
cd ixd368
```



**Backend Setup**

Navigate to the backend directory and open the notebook using Jupyter or Google Colab:

`jupyter notebook app_backend.ipynb`

Run all cells in the notebook to install dependencies, start the Flask server, and initiate ngrok. At the end of the notebook execution, an ngrok URL will be displayed.


**Updating Frontend with Backend URL**

Copy the ngrok URL in the output at the end of the backend notebook execution. Navigate to the frontend source code and update the Axios request URL in the following file:

`cd app_frontend/src/components/UploadAudio.js`

const response = await axios.post('YOUR_NGROK_URL/upload', formData);

Save the changes.


**Frontend Setup**

Navigate back to the frontend root directory and install the necessary Node.js packages:

`npm install`

After the installation is complete, you can start the frontend server:

`npm start`

This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Usage**

Once both the backend and frontend are running, and the frontend is configured with the correct ngrok URL, you can use the web interface to upload audio files and receive transcriptions. Any errors or logs can be viewed on the backend console in Colab.

**Demo**

A demo of the working of the project can be found in the following link: [https://youtu.be/46dWqojfcoI](https://youtu.be/46dWqojfcoI)