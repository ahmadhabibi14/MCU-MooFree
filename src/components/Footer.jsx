import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="dark:bg-zinc-900 h-20 border-t border-zinc-300 dark:border-t-zinc-700 text-center flex justify-center items-center content-center">
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;