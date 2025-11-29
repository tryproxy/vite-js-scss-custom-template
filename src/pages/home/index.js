import '@/shared/dom/keyboard-events';

import { events } from '@/shared/event/event-broker';

events.all(({ event, detail }) => {
  console.log('*', event, detail);
});
