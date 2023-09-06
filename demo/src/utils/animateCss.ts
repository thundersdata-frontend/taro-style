const animateCSS = (node: any, animation: string, prefix = 'animate__') => {
  if (!node.current) return;
  console.log(node);
  const animationName = `${prefix}${animation}`;

  node.current.classList.add(`${prefix}animated`, animationName);

  function handleAnimationEnd(event: any) {
    event.stopPropagation();
    node.current.classList.remove(`${prefix}animated`, animationName);
  }

  node.current.addEventListener('animationend', handleAnimationEnd, {once: true});
};

export default animateCSS;
