<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuy41JSvPvX8lO9pG8K147PBZAkrR6dnQ",
    authDomain: "giziu-d9114.firebaseapp.com",
    projectId: "giziu-d9114",
    storageBucket: "giziu-d9114.firebasestorage.app",
    messagingSenderId: "311042530784",
    appId: "1:311042530784:web:3df6db355b3d423b865f85",
    measurementId: "G-NM3NZ05CDS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>