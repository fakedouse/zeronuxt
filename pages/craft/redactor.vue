<template lang="pug">
    #redatorApp.container.flex
        .tools
            ul.flex
                li(v-for="tool in tools" :key="tool.id", :id="tool.id")
                    button(:class="tool.type", :title="tool.description", :style="'background: url(' + tool.icon + ') 0/20px no-repeat'")
        .paper.flex
            textarea.title(contenteditable="true", minlength="3", :placeholder="inputTitle", v-on:keypress="handleTitle($event)")
            textarea.paragraph(name="paragraph", minlength="20", :placeholder="inputParag", @inputParag="updateParagraph")
        
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          id: 'qzccwcd',
          name: 'create',
          type: 'createtool',
          description: '"Создать"',
          icon: '/svg/007-pen.svg'
        },
        {
          id: 'qwcd',
          name: 'bold',
          type: 'boldtool',
          description: '"Жирный"',
          icon: '/svg/002-bold.svg'
        },
        {
          id: 'scsvc',
          name: 'italic',
          type: 'italictool',
          description: 'Курсив',
          icon: '/svg/001-text.svg'
        },
        {
          id: 'drgddj',
          name: 'underline',
          type: 'underlinetool',
          description: 'Подчеркнутый',
          icon: '/svg/003-underline.svg'
        },
        {
          id: 'rgsvgb',
          name: 'strikethrough',
          type: 'strikethroughtool',
          description: 'Перечеркнутый',
          icon: '/svg/004-strikethrough.svg'
        },
        {
          id: 'wadcvxz',
          name: 'size',
          type: 'sizetool',
          description: 'Размер шрифта',
          icon: '/svg/005-font.svg'
        },
        {
          id: 'sfvbgf',
          name: 'image',
          type: 'imagetool',
          description: 'Вставить картинку',
          icon: '/svg/006-landscape.svg'
        }
      ],
      inputTitle: 'Заголовок',
      inputParag: 'Начните отсюда',
      title: '',
      paragraph: ''
    }
  },
  methods: {
    updateParagraph(e) {
      this.input = e.target.value
    },
    handleTitle(e) {
      if (!e.shiftKey && e.which === 13) {
        e.preventDefault()
      }
      this.title = e.target.value
    }
  }
}
</script>

<style lang="scss">
.container {
  background: rgba(255, 255, 255, 0);
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.tools {
  min-width: 200px;
  margin: 10px;
}
.tools ul {
  position: relative;
  vertical-align: middle;
  margin: 5px;
  list-style: none;
  justify-content: center;
  padding: 10px 2px;
  opacity: 0.9;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 80%;
    height: 2px;
    border-radius: 200px/3px;
    background: rgba(120, 30, 160, 0.5);
  }
  &:hover {
    opacity: 1;
    &::before {
      background: rgba(120, 30, 160, 0.8);
    }
  }
  & li button {
    display: inline-block;
    margin: 5px;
    font-family: 'Quicksand', sans-serif;
    background: #ffff;
    font-size: 12px;
    text-decoration: none;
    outline: none;
    color: inherit;
    border: 0;
    width: 20px;
    height: 20px;
    opacity: 0.5;
    filter: drop-shadow(0 0 3px rgb(120, 30, 160));
    transition: all 0.3s ease 0s;
    background-size: 20px;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
}
.paper {
  margin: 10px;
  width: 100%;
  min-height: 500px;
  max-height: 1000px;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  font-family: 'Pacifico', cursive;
  flex-direction: column;
  & textarea {
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Pacifico', cursive;
    border: 0;
    white-space: nowrap;
    width: 100%;
    height: calc(100%-10px);
  }
  & .title {
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    font-size: 28px;
  }
  & .paragraph {
    flex-grow: 5;
  }
}
</style>
