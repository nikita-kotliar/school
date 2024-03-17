import handlerStartBtn from './exercises_card.js';

import {
  getFav,
  setFav,
  removeFromFav,
  LS_FAV,
} from './localalStorageLogical.js';

const refs = {
  cardSet: document.querySelector('.fav_card_list'),
  noCards: document.querySelector('.no_cards_wrapper'),
};

const uniqueIdFilter = arr => {
  const uniqueIds = new Set();
  const newArray = arr.filter(obj => {
    if (!uniqueIds.has(obj._id)) {
      uniqueIds.add(obj._id);
      return true;
    }
    return false;
  });
  return newArray;
};

const renderCards = arr => {
  const uniqueIdOnlyArray = uniqueIdFilter(arr);

  const markup = uniqueIdOnlyArray.map(
    ({ name, _id, burnedCalories, bodyPart, target }) => {
      return `<li data-id-card="${_id}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button name="trash" data-id-del-btn="${_id}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="./images/icon.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button name="start" data-id-start-btn="${_id}" data-action="start_exercise_btn" class="btn">
                <span class="start">start</span>
                <svg width="16" height="16" aria-label="arrow icon">
                  <use href="./images/icon.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>

            <div class="inner_wrapper">
              <div class="icon_man">
                <svg width="16" height="16">
                  <use href="./images/icon.svg#icon-man"></use>
                </svg>
              </div>
              <p class="exercise_name">${name}</p>
            </div>

            <div class="details_wrapper">
              <ul class="details_list">
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Burned calories:
                      <span class="detail_value">${burnedCalories} / 3 min</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Body part: <span class="detail_value">${bodyPart}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${target}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`;
    }
  );

  refs.cardSet.innerHTML = markup.join('');
};


const onClick = e => {
  const startBtn = e.target.closest('[data-action="start_exercise_btn"]');
  const deleteBtn = e.target.closest('[data-action="delete_fav_card"]');
  const cardComponent = e.target.closest('[data-component="fav_card"]');

  if (!e.target.tagName === 'BUTTON' || (!deleteBtn && !startBtn)) {
    return;
  }

  if (deleteBtn) {
    if (deleteBtn.dataset.idDelBtn === cardComponent.dataset.idCard) {
      const idToRemove = deleteBtn.dataset.idDelBtn;
      removeFromFav(idToRemove);
      checkStorage();
    } else return;
  } else if (startBtn) {
    const startId = startBtn.dataset.idStartBtn;
    const arr = getFav(LS_FAV);
    const outputObj = arr.find(obj => obj._id === startId);
    handlerStartBtn(outputObj, true, true);
  }
};


export const checkStorage = () => {
  if (document.querySelector('.favourite_exercises') !== null) {
    const isFavsExist = getFav(LS_FAV).length !== 0;
    if (!isFavsExist) {
      refs.noCards.classList.remove('visually-hidden');
      refs.cardSet.classList.add('visually-hidden');
    } else {
      refs.noCards.classList.add('visually-hidden');
      refs.cardSet.classList.remove('visually-hidden');
      renderCards(getFav(LS_FAV));
      refs.cardSet.addEventListener('click', onClick);
    }
  }
};

checkStorage();
