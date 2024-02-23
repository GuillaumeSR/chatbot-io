export default (data) => {
  const {
    name,
    image,
    description
  } = data;

  return `
  <div class="col-3">
    <div class="card">
      <img src=${image} class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
    </div>
  </div>
  `;
};
