<script>
  import { onMount } from 'svelte';
  import logo from '$lib/assets/brand/rough-cream-logo.png';

  let bar;

  onMount(() => {
    const size = 12;
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size * 4;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      const rotations = [0, 90, 180, 270];
      for (let i = 0; i < 4; i++) {
        ctx.save();
        ctx.translate(i * size + size / 2, size / 2);
        ctx.rotate((rotations[i] * Math.PI) / 180);
        ctx.drawImage(img, -size / 2, -size / 2, size, size);
        ctx.restore();
      }
      bar.style.backgroundImage = `url(${canvas.toDataURL()})`;
    };
  });
</script>

<div class="tribal-bar" role="presentation">
  <div class="tribal-bar__pattern" bind:this={bar}></div>
</div>

<style>
  .tribal-bar {
    height: 16px;
    background-color: var(--burgundy);
    position: relative;
    width: 100%;
    display: block;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: 0 1px 0 var(--burgundy), 0 -1px 0 var(--burgundy);
  }
  .tribal-bar__pattern {
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 0;
    right: 0;
    background-size: 48px 12px;
    background-repeat: repeat-x;
    background-position: left center;
  }
</style>
