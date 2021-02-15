<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="offset-md-2 col-md-8 offset-md-2 div-form">
          <form>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control form-control-sm "
                id="inputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="select" class="form-label"
                >Disabled select menu</label
              >
              <select id="select" class="form-select">
                <option>Disabled select</option>
                <option>Disabled select</option>
                <option>Disabled select</option>
                <option>Disabled select</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.div-form {
  text-align: left;
}
.form-control {
  border-radius: 0.2em;
  border: 1px solid #767676

  /* border-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));; */
}
.form-select {
  width: 100%;
  height: calc(1.5em + 0.5rem + 2px);
  border-radius: 0.2em;
}
</style>
