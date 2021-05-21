<template>
  <div class="tracks">
    <div class="track track--top">
      <div class="track-title">
        CHALLENGE
      </div>
      <div class="track-content">
        <p>United we stand for the 3 stripes as we look up at the bright blue sky beyond the tracks.</p>
        <p>Lace up your sneakers, the race is about to begin, may the code decide your fate today.</p>
        <p>Look at the adidas flags swung enthusiastically by spectators in the stands as they chant one last time: Code'n'Stripes</p>
        <p>Time to code, the moment to test your skills to the limit has arrived, "tech" it as far as you can. and now, just take one last deep breath... get into keyboard position...</p>
        <p v-if="timeToStart < 0">READY, SET, CODE!</p>
        <p class="timer"><timer v-if="timeToStart < 0" :time="timeToEnd" /></p>
      </div>
    </div>
    <div class="track track--mid track--right">
      <div class="track-title">
        REWARDS
      </div>
      <div class="track-content">
        <p>We are offering you a prize based on quality, as creating only the best for the athlete is what took adidas to the top, and still does</p>
        <p>We are also giving you a prize based on what makes an outstanding foundation for every adidas product:</p>
        <p>"Functionality, fit, weight, aesthetics" – Adi Dassler</p>
        <p>Because our prize is much more than a pair of sneakers, it's a piece of our history, our innovation, our pride, our team, and our hearts</p>
        <p>Yes, it's a secret #hype product...CODE FOR IT!</p>
        <img class="shoebox" src="shoebox.svg" height="200px" alt="shoebox" />
      </div>
    </div>
    <div class="track track--bot">
      <div class="track-title">
        RULEBOOK
      </div>
      <div class="track-content">
        <p>Remember that by participating in the contest you are adhering to the <router-link to="/terms-and-conditions">"CHALLENGE T&C's"</router-link> and the <router-link to="/privacy-notice">"CHALLENGE PRIVACY NOTICE"</router-link> unconditionally.</p>
        <p>Contest open 24 hours <dates/></p>
        <p>Click on "JOIN THE RACE" button on the top of this site</p>
        <p>Enter name + email on CodeSignal</p>
        <p>Don't forget to submit each completed task</p>
        <p>GO & CODE!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { remainingTime } from '../mixins/remaining-time';

export default {
  mixins: [ remainingTime ]
};
</script>

<style lang="stylus">
.tracks
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2.5rem;

  &::before
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(../../tracks-halved-center.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto auto;
    margin: -10rem 0;

    @media (max-width: $homePageWidth)
      background-size: cover
      background-position-x: center


$trackTitleToImageAdjustment = -.5rem
$trackWidth = 32rem

.track
  position: relative
  display: flex
  flex-direction: row
  background-size: 32rem
  background-repeat: no-repeat
  margin-top: 12rem
  margin-bottom: 12rem

  &.track--right
    flex-direction: row-reverse
    text-align: right

  &.track--right .track-title
    transform: none
    text-align: left
    margin-right: $trackTitleToImageAdjustment

  &.track--top
    background-image: url(../../story-1.png)

  &.track--mid
    background-image: url(../../story-2.png)
    background-position-x: right

  &.track--bot
    background-image: url(../../story-3.png)

  .track-title
    writing-mode: vertical-rl
    text-align: right
    text-transform: uppercase
    transform: rotate(180deg)
    padding-left: 1.6rem
    font-size: 2rem
    font-weight: 700
    margin-left: $trackTitleToImageAdjustment

  .track-content
    flex: 1
    max-width: $trackWidth - 2 * 3rem
    padding: 1.6rem 0
    font-size: 1rem

    > p:first-child
      margin-top: 0

    p
      line-height: 1.4

    a
      background: none !important


.timer
  font-size: 1.5rem
  font-weight: 700


.shoebox
  display: block
  margin: 2rem auto

  &:hover
    animation: shake 1s ease infinite


@keyframes shake {
  0% { transform: translateX(0) translateY(0); }
  10% { transform: translateX(5px); }
  15% { transform: translateX(-5px); }
  20% { transform: translateX(4px); }
  25% { transform: translateX(-4px); }
  30% { transform: translateX(2px); }
  35% { transform: translateX(-2px); }
  45% { transform: translateX(1px); }
  50% { transform: translateY(0) translateY(0); }
  60% { transform: translateY(5px); }
  65% { transform: translateY(-5px); }
  70% { transform: translateY(4px); }
  75% { transform: translateY(-4px); }
  80% { transform: translateY(2px); }
  85% { transform: translateY(-2px); }
  95% { transform: translateY(1px); }
  100% { transform: translateX(0) translateY(0); }
}
</style>