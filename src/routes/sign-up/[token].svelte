<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ page }) => {
    return {
      props: {
        token: page.params.token,
      },
    };
  };
</script>

<script>
  /** @type string */
  export let token;
</script>

Hello {token}!
