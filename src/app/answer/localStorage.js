export default function localStorageCount() {
  localStorage.setItem('count', 0);

  let currentCount = parseInt(localStorage.getItem('count'));

  const addCountHandle = () => {
    currentCount = currentCount += 1;
    localStorage.setItem('count', currentCount);
  };
}
