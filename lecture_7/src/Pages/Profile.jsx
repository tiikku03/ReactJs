import React from 'react'

function Profile() {
  const userData = localStorage.getItem("usuario");
  const parsedUserData = userData ? JSON.parse(userData) : null;

  return (
    <div>
      <h1>Bienvenido {parsedUserData?.nombre || "Invitado"}</h1>
      
    </div>
  )
}

export default Profile