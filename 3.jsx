const onSuccessfulRequest = (userData, token) => {
    // Método a ejecutar si la petición se realiza correctamente
      localStorage.setItem('token', token || '')
      localStorage.setItem('user', userData || '')
      history.replace('/home')
  
}

const onFailedRequest = () => {
    // Método a ejecutar si la petición falla
    Swal.fire(
    'password or email are not valid',
    'error',
    'try again'
    )
}