const firebaseConfig = {
    apiKey: "AIzaSyDkvhm1xfkOkAQrzYKlklB2MmOij4MsAlM",
    authDomain: "lets-chat-app-55786.firebaseapp.com",
    projectId: "lets-chat-app-55786",
    storageBucket: "lets-chat-app-55786.appspot.com",
    messagingSenderId: "51978682638",
    appId: "1:51978682638:web:e7e7416f7d03ed3138d75f"
  };


  function addUser() {
      user_name = document.getElementById("user_name").value ;
      localStorage.setItem("user_name" , user_name);
      window.location = "2nd_page_kwitter_room.html";
  }