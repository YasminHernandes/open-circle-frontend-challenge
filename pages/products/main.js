const token = localStorage.getItem('token')

if(token === null) {
    window.location.replace('/pages/unauthorized')
} 

const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.replace('/')
}