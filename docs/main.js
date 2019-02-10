(() => {
  const EMOJI_LIST = [
    { name: 'zero', hex: '0&#8419;' },
    { name: 'one', hex: '1&#8419;' },
    { name: 'two', hex: '2&#8419;' },
    { name: 'three', hex: '3&#8419;' },
    { name: 'four', hex: '4&#8419;' },
    { name: 'five', hex: '5&#8419;' },
    { name: 'six', hex: '6&#8419;' },
    { name: 'seven', hex: '7&#8419;' },
    { name: 'eight', hex: '8&#8419;' },
    { name: 'nine', hex: '9&#8419;' },
    { name: 'hash', hex: '#&#8419;' },
    { name: 'astrick', hex: '*&#8419;' },
    { name: 'black rightwards arrow', hex: '&#x27A1;' },
    { name: 'copyright', hex: '&copy;' },
    { name: 'registered', hex: '&reg;' },
    { name: 'tradmark', hex: '&trade;' },
    { name: 'airplane', hex: '&#x2708;' },
    { name: 'anchor', hex: '&#x2693;' },
    { name: 'baseball', hex: '&#x26BE;' },
    { name: 'black scissors', hex: '&#x2702;' },
    { name: 'black telephone', hex: '&#x260E;' },
    { name: 'black nib', hex: '&#x2712;' },
    { name: 'black universal recycling symbol', hex: '&#x267B;' },
    { name: 'church', hex: '&#x26EA;' },
    { name: 'cloud', hex: '&#x2601;' },
    { name: 'flag in hole', hex: '&#x26F3;' },
    { name: 'envelope', hex: '&#x2709;' },
    { name: 'fountain', hex: '&#x26F2;' },
    { name: 'fuel pump', hex: '&#x26FD;' },
    { name: 'heavy black heart', hex: '&#x2764;' },
    { name: 'high voltage sign', hex: '&#x26A1;' },
    { name: 'hot beverage', hex: '&#x2615;' },
    { name: 'hot springs', hex: '&#x2668;' },
    { name: 'no entry', hex: '&#x26D4;' },
    { name: 'medium black circle', hex: '&#x26AB;' },
    { name: 'medium white circle', hex: '&#x26AA;' },
    { name: 'pencil', hex: '&#x270F;' },
    { name: 'raised fist', hex: '&#x270A;' },
    { name: 'raised hand', hex: '&#x270B;' },
    { name: 'sailboat', hex: '&#x26F5;' },
    { name: 'smiling face with sunglasses', hex: '&#x1F60E;' },
    { name: 'snowman', hex: '&#x2603;' },
    { name: 'snowman without snow', hex: '&#x26C4;' },
    { name: 'soccer ball', hex: '&#x26BD;' },
    { name: 'sparkles', hex: '&#x2728;' },
    { name: 'sun behind cloud', hex: '&#x26C5;' },
    { name: 'tent', hex: '&#x26FA;' },
    { name: 'umbrella', hex: '&#x2602;' },
    { name: 'umbrella with rain drops', hex: '&#x2614;' },
    { name: 'victory hand', hex: '&#x270C;' },
    { name: 'warning sign', hex: '&#x26A0;' },
    { name: 'wheelchair symbol', hex: '&#x267F;' },
    { name: 'white frowning face', hex: '&#x2639;' },
    { name: 'white smiling face', hex: '&#x263A;' },
    { name: 'writing hand', hex: '&#x270D;' },
    { name: 'ballot box with check', hex: '&#x2611;' },
    { name: 'black question mark ornament', hex: '&#x2753;' },
    { name: 'crossmark', hex: '&#x274C;' },
    { name: 'negative squared cross mark', hex: '&#x274E;' },
    { name: 'white heavy check mark', hex: '&#x2705;' },
    { name: 'white exclamation mark ornament', hex: '&#x2755;' },
    { name: 'white question mark ornament', hex: '&#x2754;' },
    { name: 'female sign', hex: '&#x2640;' },
    { name: 'male sign', hex: '&#x2642;' },
    { name: 'latin cross', hex: '&#x271D;' },
    { name: 'star of david', hex: '&#x2721;' },
    { name: 'aries', hex: '&#x2648;' },
    { name: 'aquarius', hex: '&#x2652;' },
    { name: 'cancer', hex: '&#x264B;' },
    { name: 'capricorn', hex: '&#x2651;' },
    { name: 'gemini', hex: '&#x264A;' },
    { name: 'leo', hex: '&#x264C;' },
    { name: 'libra', hex: '&#x264E;' },
    { name: 'ophiuchus', hex: '&#x26CE;' },
    { name: 'pisces', hex: '&#x2653;' },
    { name: 'sagittarius', hex: '&#x2650;' },
    { name: 'scropius', hex: '&#x264F;' },
    { name: 'taurus', hex: '&#x2649;' },
    { name: 'virgo', hex: '&#x264D;' },
  ];

  const contentElement = document.getElementById('content');

  function createEmojiCell(emoji, type) {
    const emojiCellElement = document.createElement('td');
    emojiCellElement.innerHTML = emoji.hex;
    emojiCellElement.classList.add('emoji', type);

    return emojiCellElement;
  }

  if (contentElement) {
    EMOJI_LIST.forEach((emoji) => {
      const rowElement = document.createElement('tr');

      const descriptionCellElement = document.createElement('td');
      descriptionCellElement.textContent = emoji.name;
      rowElement.append(descriptionCellElement);

      const normalCellElement = createEmojiCell(emoji, 'normal-emoji');
      rowElement.append(normalCellElement);

      const colorCellElement = createEmojiCell(emoji, 'color-emoji');
      rowElement.append(colorCellElement);

      const bothCellElement = createEmojiCell(emoji, 'both-emoji');
      rowElement.append(bothCellElement);

      contentElement.append(rowElement);
    });
  }
})();
