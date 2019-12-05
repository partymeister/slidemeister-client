<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  // Your variable overrides

  $blue:       #20a8d8 !default;
  $indigo:     #6610f2 !default;
  $purple:     #6f42c1 !default;
  $pink:       #e83e8c !default;
  $red:        #f86c6b !default;
  $orange:     #f8cb00 !default;
  $yellow:     #ffc107 !default;
  $green:      #4dbd74 !default;
  $teal:       #20c997 !default;
  $cyan:       #17a2b8 !default;

  @import '~bootstrap';
  @import "~animate.css";
  @import "~toastr/toastr";

  .medium-editor-element {
    z-index: 10000;
    width: 98%;
    margin: 0 auto;
    text-align: left;
    font-family: Arial, sans-serif;
  }

  .hidden {
    display: none;
  }

  .medium-editor-element p {
    margin-bottom: 0;
  }

  .moveable {
    display: flex;
    font-family: "Roboto", sans-serif;
    z-index: 1000;
    position: absolute;
    width: 300px;
    height: 200px;
    text-align: center;
    font-size: 40px;
    margin: 0 auto;
    font-weight: 100;
    letter-spacing: 1px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .movable span {
    font-size: 10px;
  }

  .snappable-shadow {
    width: 200px;
    height: 200px;
    /*background-color: red;*/
    position: absolute;
    visibility: hidden;
  }
</style>
