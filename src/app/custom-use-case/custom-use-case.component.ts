import { CdkDrag, CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Card } from '../app.interface';

@Component({
  selector: 'app-custom-use-case',
  templateUrl: './custom-use-case.component.html',
  styleUrls: ['./custom-use-case.component.css'],
})
export class CustomUseCaseComponent implements OnInit {
  cards: Card[] = [
    {
      id: 49522489,
      name: 'Beelze Frog',
      type: 'Effect Monster',
      desc: 'This card gains 300 ATK for each "T.A.D.P.O.L.E." in your Graveyard.',
      atk: 1200,
      def: 800,
      level: 3,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Dark Revelation Volume 4',
          set_code: 'DR04-EN146',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '3.69',
        },
        {
          set_name: 'Shadow of Infinity',
          set_code: 'SOI-EN026',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '1.88',
        },
      ],
      card_images: [
        {
          id: 49522489,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/49522489.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/49522489.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.19',
          tcgplayer_price: '0.20',
          ebay_price: '0.99',
          amazon_price: '0.20',
          coolstuffinc_price: '1.99',
        },
      ],
    },
    {
      id: 47346782,
      name: 'Centerfrog',
      type: 'Effect Monster',
      desc: 'Cannot be used as material for a Fusion, Synchro, Xyz, or Link Summon. If this card is Normal or Flip Summoned: Change it to Defense Position. Once per turn: You can target 1 monster in your opponent\'s Main Monster Zone; give your opponent control of this Defense Position card by moving it to their zone adjacent to the target, then if your opponent controls exactly 2 "Centerfrog" in the Main Monster Zone, gain control of all monsters in between those 2 cards.',
      atk: 100,
      def: 2000,
      level: 2,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: '2019 Gold Sarcophagus Tin Mega Pack',
          set_code: 'MP19-EN094',
          set_rarity: 'Rare',
          set_rarity_code: '(R)',
          set_price: '1.04',
        },
        {
          set_name: 'Cybernetic Horizon',
          set_code: 'CYHO-EN025',
          set_rarity: 'Short Print',
          set_rarity_code: '(SP)',
          set_price: '0.91',
        },
      ],
      card_images: [
        {
          id: 47346782,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/47346782.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/47346782.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.09',
          tcgplayer_price: '0.08',
          ebay_price: '0.99',
          amazon_price: '0.25',
          coolstuffinc_price: '0.49',
        },
      ],
    },
    {
      id: 9910360,
      name: 'D.3.S. Frog',
      type: 'Fusion Monster',
      desc: '"Des Frog" + "Des Frog" + "Des Frog"\nA Fusion Summon of this card can only be conducted with the above Fusion Material Monsters. This card gains 500 ATK for each "Treeborn Frog" in your Graveyard.',
      atk: 2500,
      def: 2000,
      level: 8,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Dark Revelation Volume 4',
          set_code: 'DR04-EN156',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '6.75',
        },
        {
          set_name: 'Shadow of Infinity',
          set_code: 'SOI-EN036',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '2.32',
        },
      ],
      card_images: [
        {
          id: 9910360,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/9910360.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/9910360.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.17',
          tcgplayer_price: '0.31',
          ebay_price: '1.50',
          amazon_price: '0.98',
          coolstuffinc_price: '0.79',
        },
      ],
    },
    {
      id: 84451804,
      name: 'Des Frog',
      type: 'Effect Monster',
      desc: 'When this card is Tribute Summoned, you can Special Summon "Des Frog"(s) from your hand or Deck up to the number of "T.A.D.P.O.L.E."(s) in your Graveyard.',
      atk: 1900,
      def: 0,
      level: 5,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Cybernetic Revolution',
          set_code: 'CRV-EN026',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '2.12',
        },
        {
          set_name: 'Dark Revelation Volume 4',
          set_code: 'DR04-EN026',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '7.18',
        },
      ],
      card_images: [
        {
          id: 84451804,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/84451804.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/84451804.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.30',
          tcgplayer_price: '0.99',
          ebay_price: '2.38',
          amazon_price: '1.96',
          coolstuffinc_price: '4.99',
        },
      ],
    },
    {
      id: 46239604,
      name: 'Dupe Frog',
      type: 'Effect Monster',
      desc: 'This card\'s name becomes "Des Frog" while it is on the field. Monsters your opponent controls cannot target monsters for attacks, except this one. When this card is sent from the field to the Graveyard: You can add 1 "Frog" monster from your Deck or Graveyard to your hand, except "Dupe Frog".',
      atk: 100,
      def: 2000,
      level: 2,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Crimson Crisis',
          set_code: 'CRMS-EN028',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '2.66',
        },
        {
          set_name: 'OTS Tournament Pack 3',
          set_code: 'OP03-EN005',
          set_rarity: 'Super Rare',
          set_rarity_code: '(SR)',
          set_price: '12.33',
        },
        {
          set_name: 'Structure Deck: Freezing Chains',
          set_code: 'SDFC-EN022',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '1.82',
        },
      ],
      card_images: [
        {
          id: 46239604,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/46239604.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/46239604.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.31',
          tcgplayer_price: '0.52',
          ebay_price: '1.49',
          amazon_price: '1.90',
          coolstuffinc_price: '0.99',
        },
      ],
    },
    {
      id: 81278754,
      name: 'Flip Flop Frog',
      type: 'Effect Monster',
      desc: 'Once per turn, you can flip this card into face-down Defense Position. When this card is flipped face-up, you can return monsters your opponent controls to their owners\' hand up to the number of face-up "Frog" monsters you control, except "Frog the Jam".',
      atk: 500,
      def: 200,
      level: 2,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Crimson Crisis',
          set_code: 'CRMS-EN029',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '3.73',
        },
      ],
      card_images: [
        {
          id: 81278754,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/81278754.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/81278754.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.24',
          tcgplayer_price: '0.94',
          ebay_price: '2.59',
          amazon_price: '3.60',
          coolstuffinc_price: '0.99',
        },
      ],
    },
    {
      id: 56840658,
      name: 'Poison Draw Frog',
      type: 'Effect Monster',
      desc: 'When this face-up card on the field is sent to the Graveyard (unless it was attacked while face-down and destroyed by battle), you can draw 1 card.',
      atk: 100,
      def: 100,
      level: 2,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Cybernetic Revolution',
          set_code: 'CRV-EN028',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '2.72',
        },
        {
          set_name: 'Dark Revelation Volume 4',
          set_code: 'DR04-EN028',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '85',
        },
      ],
      card_images: [
        {
          id: 56840658,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/56840658.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/56840658.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.24',
          tcgplayer_price: '0.44',
          ebay_price: '1.89',
          amazon_price: '1.60',
          coolstuffinc_price: '8.99',
        },
      ],
    },
    {
      id: 68638985,
      name: 'Slime Toad',
      type: 'Normal Monster',
      desc: 'A slime with the head of a frog, it attacks by croaking terribly.',
      atk: 700,
      def: 500,
      level: 2,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: "McDonald's Promotional Cards",
          set_code: 'MP1-004',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '9.9',
        },
        {
          set_name: 'OTS Tournament Pack 3',
          set_code: 'OP03-EN015',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '1.24',
        },
      ],
      card_images: [
        {
          id: 68638985,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/68638985.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/68638985.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.20',
          tcgplayer_price: '0.28',
          ebay_price: '6.69',
          amazon_price: '0.50',
          coolstuffinc_price: '0.25',
        },
      ],
    },
    {
      id: 63948258,
      name: 'Submarine Frog',
      type: 'Effect Monster',
      desc: 'During battle between this attacking card and a Defense Position monster whose DEF is lower than the ATK of this card, inflict the difference as Battle Damage to your opponent.',
      atk: 1200,
      def: 600,
      level: 2,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Crimson Crisis',
          set_code: 'CRMS-EN087',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '1.64',
        },
      ],
      card_images: [
        {
          id: 63948258,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/63948258.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/63948258.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.25',
          tcgplayer_price: '0.28',
          ebay_price: '1.39',
          amazon_price: '1.46',
          coolstuffinc_price: '0.25',
        },
      ],
    },
    {
      id: 9126351,
      name: 'Swap Frog',
      type: 'Effect Monster',
      desc: 'You can Special Summon this card (from your hand) by discarding 1 other WATER monster. When this card is Summoned: You can send 1 Level 2 or lower WATER Aqua monster from your Deck or face-up field to the GY. Once per turn: You can return 1 monster you control to the hand; you can Normal Summon 1 "Frog" monster during your Main Phase this turn, except "Swap Frog", in addition to your Normal Summon/Set. (You can only gain this effect once per turn.)',
      atk: 1000,
      def: 500,
      level: 2,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Duel Overload',
          set_code: 'DUOV-EN063',
          set_rarity: 'Ultra Rare',
          set_rarity_code: '(UR)',
          set_price: '2.46',
        },
        {
          set_name: 'OTS Tournament Pack 3',
          set_code: 'OP03-EN001',
          set_rarity: 'Ultimate Rare',
          set_rarity_code: '(UtR)',
          set_price: '191.19',
        },
        {
          set_name: 'Stardust Overdrive',
          set_code: 'SOVR-EN034',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '2.35',
        },
      ],
      card_images: [
        {
          id: 9126351,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/9126351.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/9126351.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.59',
          tcgplayer_price: '1.33',
          ebay_price: '4.49',
          amazon_price: '4.90',
          coolstuffinc_price: '199.99',
        },
      ],
    },
    {
      id: 12538374,
      name: 'Treeborn Frog',
      type: 'Effect Monster',
      desc: 'Once per turn, during your Standby Phase, if this card is in your Graveyard and you do not control "Treeborn Frog": You can Special Summon this card. You must control no Spell/Trap Cards to activate and to resolve this effect.',
      atk: 100,
      def: 100,
      level: 1,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Battle Pack 2: War of the Giants',
          set_code: 'BP02-EN043',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '1.41',
        },
        {
          set_name: 'Battle Pack 2: War of the Giants',
          set_code: 'BP02-EN043',
          set_rarity: 'Mosaic Rare',
          set_rarity_code: '(MSR)',
          set_price: '1.38',
        },
        {
          set_name: 'Battle Pack: Epic Dawn',
          set_code: 'BP01-EN012',
          set_rarity: 'Rare',
          set_rarity_code: '(R)',
          set_price: '1.38',
        },
        {
          set_name: 'Battle Pack: Epic Dawn',
          set_code: 'BP01-EN012',
          set_rarity: 'Starfoil Rare',
          set_rarity_code: '(SFR)',
          set_price: '4.52',
        },
        {
          set_name: 'Champion Pack: Game Four',
          set_code: 'CP04-EN020',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '2.7',
        },
        {
          set_name: 'Dark Revelation Volume 4',
          set_code: 'DR04-EN145',
          set_rarity: 'Ultra Rare',
          set_rarity_code: '(UR)',
          set_price: '848.4',
        },
        {
          set_name: 'Duelist Saga',
          set_code: 'DUSA-EN058',
          set_rarity: 'Ultra Rare',
          set_rarity_code: '(UR)',
          set_price: '4.51',
        },
        {
          set_name: 'Gold Series 2009',
          set_code: 'GLD2-EN010',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '2.41',
        },
        {
          set_name: 'Shadow of Infinity',
          set_code: 'SOI-EN025',
          set_rarity: 'Rare',
          set_rarity_code: '(R)',
          set_price: '2.9',
        },
        {
          set_name: 'Shadow of Infinity',
          set_code: 'SOI-EN025',
          set_rarity: 'Ultimate Rare',
          set_rarity_code: '(UtR)',
          set_price: '47.45',
        },
      ],
      card_images: [
        {
          id: 12538374,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/12538374.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/12538374.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.28',
          tcgplayer_price: '0.53',
          ebay_price: '31.00',
          amazon_price: '0.79',
          coolstuffinc_price: '0.39',
        },
      ],
    },
    {
      id: 56052205,
      name: 'Unifrog',
      type: 'Effect Monster',
      desc: 'This card can attack your opponent directly. When this card successfully attacks directly, if you control a "Frog" monster other than "Frog the Jam" or "Unifrog", you can destroy 1 Spell or Trap your opponent controls.',
      atk: 400,
      def: 400,
      level: 2,
      race: 'Aqua',
      attribute: 'WATER',
      archetype: 'Frog',
      card_sets: [
        {
          set_name: 'Light of Destruction',
          set_code: 'LODT-EN029',
          set_rarity: 'Common',
          set_rarity_code: '(C)',
          set_price: '2.04',
        },
      ],
      card_images: [
        {
          id: 56052205,
          image_url:
            'https://storage.googleapis.com/ygoprodeck.com/pics/56052205.jpg',
          image_url_small:
            'https://storage.googleapis.com/ygoprodeck.com/pics_small/56052205.jpg',
        },
      ],
      card_prices: [
        {
          cardmarket_price: '0.30',
          tcgplayer_price: '0.91',
          ebay_price: '0.99',
          amazon_price: '2.35',
          coolstuffinc_price: '0.99',
        },
      ],
    },
  ];
  myList: Card[] = [];
  constructor() {}

  ngOnInit(): void {
    this.myList = [];
  }

  dropOnList(event: CdkDragDrop<Card[]>) {
    // //Obtenemos el elemento
    const element = (event.previousContainer.data as Array<Card>)[
      event.previousIndex
    ];
    // //Comprobamos que no exista este elemento en el array
    const isExist = (event.container.data as Array<Card>).includes(element);

    if (!isExist)
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
  }

  predicate(item: CdkDrag<Card>) {
    return item.data.id !== 49522489;
  }
}
