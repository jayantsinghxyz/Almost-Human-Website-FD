const GridBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-grid-flow" />
    </div>
  );
};

export default GridBackground;
