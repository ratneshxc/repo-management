export const GET_PROFILE_INFO = async () => {
    const res = await fetch('https://api.github.com/users/supreetsingh247', {
      method: 'GET',
      cache: 'no-cache',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
    });
    return res.json();
  };


  export const GET_USER_DETAILS = async () => {
    const res = await fetch('https://api.github.com/users/supreetsingh247/repos', {
      method: 'GET',
      cache: 'no-cache',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
    });
    return res.json();
  };