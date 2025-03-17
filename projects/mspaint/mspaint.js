const select = (query, parent = document) => [...parent.querySelectorAll(query)]
      const selectOne = (query, parent = document) => parent.querySelector(query)

      select('.palette__color').forEach(
        element => element.style.backgroundColor = element.dataset.color
      )

      selectOne('.tools__box').addEventListener('click', ({ target }) => {
        if (target.nodeName === 'BUTTON') {
          target.classList.remove('win-border')
          target.classList.add('win-border-inset')
        }
      })
