/**
 * Thank You page content — English base + type definition.
 *
 * Language-specific files (thank-you-content-zh.ts, etc.) export the same shape.
 *
 * @package Soeteck\Astro
 */

export interface ThankYouStep {
  title: string;
  text: string;
}

export interface ThankYouContent {
  steps: ThankYouStep[];
}

export const THANK_YOU_EN: ThankYouContent = {
  steps: [
    {
      title: 'We review your request',
      text: 'Our team checks your project details, product interests, and timeline so the right specialist can respond.',
    },
    {
      title: 'A specialist follows up',
      text: 'A Soeteck representative will contact you to clarify requirements and confirm the best next step.',
    },
    {
      title: 'You receive tailored recommendations',
      text: 'We prepare practical guidance for your power, cooling, rack, monitoring, or data center needs.',
    },
  ],
};