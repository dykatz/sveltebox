<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ page }) => {
    return {
      props: {
        user: page.params.user,
      },
    };
  };
</script>

<script>
  /** @type string */
  export let user;
</script>

Hello {user}!
