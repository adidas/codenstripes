<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none">
    <defs>
      <filter id="glitch" x="0" y="0">

        <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />

        <feOffset in="red" result="red" dx="0" dy="0">
          <animate attributeName="dx" attributeType="XML" values="-2; -5; -3; -6; -5; -3; -2; -5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0;" dur="2s" repeatCount="indefinite"/>
        </feOffset>

        <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green"/>

        <feOffset in="green" result="green" dx="0" dy="0" />

        <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue"/>

        <feOffset in="blue" result="blue" dx="0" dy="0">
          <animate attributeName="dx" attributeType="XML" values="2; 5; 3; 6; 5; 3; 2; 5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0;" dur="2s" repeatCount="indefinite"/>
        </feOffset>

        <feBlend in="red" in2="green" mode="screen" result="blend" />

        <feBlend in="blend" in2="blue" mode="screen" result="blend" />

      </filter>
    </defs>
  </svg>
</template>