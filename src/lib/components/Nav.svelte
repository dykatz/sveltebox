<script>
  import NavSearch from "./NavSearch.svelte";

  /** @type boolean */
  let showBar = false;
</script>

<div class="w3-bar w3-black">
  <a href="/" class="w3-bar-item w3-button">Home</a>
  <a href="/notifications" class="w3-bar-item w3-button w3-hide-small">
    Notifications
  </a>

  <div class="w3-bar-item w3-button w3-hide-small w3-right">
    <NavSearch />
  </div>
  <div class="w3-bar-item w3-button w3-hide-small w3-right">Post</div>

  <div class="w3-dropdown-hover w3-hide-small w3-right">
    <button class="w3-button">Account</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
      <div class="w3-bar-item w3-button">Log In</div>
    </div>
  </div>

  <button
    class="w3-button w3-hide-medium w3-hide-large w3-right"
    on:click={() => (showBar = !showBar)}>&#9776;</button
  >
</div>

<div
  class="w3-bar-block w3-black w3-hide w3-hide-medium w3-hide-large"
  class:w3-show={showBar}
>
  <a href="/notifications" class="w3-bar-item w3-button">Notifications</a>

  <div class="w3-bar-item w3-button">Post</div>

  <div class="w3-dropdown-hover">
    <button class="w3-button">Account</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
      <div class="w3-bar-item w3-button">Log In</div>
    </div>
  </div>

  <div class="w3-bar-item w3-button"><NavSearch /></div>
</div>
