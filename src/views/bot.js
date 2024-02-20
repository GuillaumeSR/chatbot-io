export default (data) => {
  const {
    name,
    image,
    description
  } = data;

  return `
    <div class="list-group-item d-flex justify-content-between align-items-start bot-item">
      <img src="${image}" alt="Bot 1" class="bot-image">
      <div class="nom ms-2 me-auto">
        <div class="fw-bold">${name}</div>
        ${description}
      </div>
    </div>
  `;
};
