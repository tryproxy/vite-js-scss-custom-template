import { createElement } from '@/shared/dom/create-element';
import { UIButton } from '@/shared/uikit/components/UIButton';
import { APP_EVENTS } from '@/shared/event/events';
import { formatTime } from '@/shared/utils/lib';

import { MENU_ACTIONS } from '../start/menu-actions';

export function StatsScreen({ events }) {
  const statusText = 'Status: ';

  const title = createElement('h1', { className: 'stats-screen__title' });

  const content = createElement(
    'div',
    { className: 'stats-screen__content' },
    createElement(
      'h1',
      { className: 'stats-screen__title' },

      `${statusText}`
    ),
    createElement(
      'div',
      { className: 'stats-screen__content' },

      createElement('p', {}, ``),
      createElement('p', {}, ` `)
    )
  );

  const container = createElement(
    'div',
    { className: 'stats-screen__content' },
    content
  );

  const confirmButton = UIButton({
    className: 'btn',
    id: 'back-to-menu-btn',
    title: `${MENU_ACTIONS.BACK_TO_MENU.title}`,
    onClick: () =>
      events.emit(APP_EVENTS.UI_MENU_ACTION, MENU_ACTIONS.BACK_TO_MENU.action),
    children: `${MENU_ACTIONS.BACK_TO_MENU.label}`,
  });

  const el = createElement(
    'div',
    { className: 'stats-screen' },
    // title,
    container,
    confirmButton
  );

  return el;
}
