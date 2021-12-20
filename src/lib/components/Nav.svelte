<script>
  import { goto } from "$app/navigation";

  /** @type {boolean} */
  let showBar = false;

  /** @type {boolean} */
  let signedIn = false;

  /** @type {string} */
  let searchQuery = "";

  /** @type {(event: Event) => none} */
  const onSearch = (event) => {
    event.preventDefault();
    goto(`/search?query=${searchQuery}`);
  };
</script>

<div class="w3-bar w3-black">
  <a href="/" class="w3-bar-item w3-button">Home</a>
  <a href="/about" class="w3-bar-item w3-button w3-hide-small">About</a>

  <form on:submit={onSearch}>
    <input
      class="w3-input w3-bar-item w3-hide-small w3-right"
      type="text"
      placeholder="Search"
      bind:value={searchQuery}
    />
  </form>

  {#if signedIn}
    <div class="w3-dropdown-hover w3-hide-small w3-right">
      <button class="w3-button">Profile</button>
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="/notifications" class="w3-bar-item w3-button">Notifications</a>
        <a href="/follow-requests" class="w3-bar-item w3-button">
          Follow Requests
        </a>
        <a href="/chats" class="w3-bar-item w3-button">Chats</a>
        <a href="/@me" class="w3-bar-item w3-button">My Account</a>
        <a href="/settings" class="w3-bar-item w3-button">Settings</a>
        <button
          class="w3-bar-item w3-button"
          on:click={() => (signedIn = false)}
        >
          Sign Out
        </button>
      </div>
    </div>
    <div class="w3-bar-item w3-button w3-hide-small w3-right">Post</div>
  {:else}
    <button
      class="w3-bar-item w3-button w3-hide-small w3-right"
      on:click={() => (signedIn = true)}
    >
      Sign In
    </button>
  {/if}

  <button
    class="w3-button w3-hide-medium w3-hide-large w3-right"
    on:click={() => (showBar = !showBar)}>&#9776;</button
  >
</div>

{#if showBar}
  <div class="w3-bar-block w3-black w3-hide-medium w3-hide-large">
    <a href="/about" class="w3-bar-item w3-button">About</a>

    {#if signedIn}
      <div class="w3-bar-item w3-button">Post</div>
      <a href="/notifications" class="w3-bar-item w3-button">Notifications</a>
      <a href="/follow-requests" class="w3-bar-item w3-button">
        Follow Requests
      </a>
      <a href="/chats" class="w3-bar-item w3-button">Chats</a>
      <a href="/@me" class="w3-bar-item w3-button">My Account</a>
      <a href="/settings" class="w3-bar-item w3-button">Settings</a>
      <div class="w3-bar-item w3-button" on:click={() => (signedIn = false)}>
        Sign Out
      </div>
    {:else}
      <button class="w3-bar-item w3-button" on:click={() => (signedIn = true)}>
        Sign In
      </button>
    {/if}

    <form on:submit={onSearch}>
      <input
        class="w3-input w3-bar-item w3-border"
        type="text"
        placeholder="Search"
        bind:value={searchQuery}
      />
    </form>
  </div>
{/if}
