export default async function ({ redirect }) {
    const { default: axios } = await import('axios');
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user) {
      return redirect('/login');
    }
  
    const route = window.location.pathname;
  
    if (user.role === 'admin' && route !== '/admin-dashboard') {
      return redirect('/admin-dashboard');
    } else if (user.role === 'associate' && route !== '/associate-dashboard') {
      return redirect('/associate-dashboard');
    } else if (user.role === 'customer' && route !== '/customer-dashboard') {
      return redirect('/customer-dashboard');
    }
  }
  