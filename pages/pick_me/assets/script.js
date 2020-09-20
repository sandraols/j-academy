const textElements = document.getElementsByClassName("text");

    window.setInterval(function() {
      for (let i = 0; i < textElements.length; i++) {
        const classNames = textElements[i].className;
        const classNamesArray = classNames.split(" ");
        const number = classNamesArray[classNamesArray.length - 1];

        switch (number) {
          case "one":
            classNamesArray.pop();
            classNamesArray.push("four");
            textElements[i].className = classNamesArray.join(" ");
            break;
          case "two":
            classNamesArray.pop();
            classNamesArray.push("one");
            textElements[i].className = classNamesArray.join(" ");
            break;
          case "three":
            classNamesArray.pop();
            classNamesArray.push("two");
            textElements[i].className = classNamesArray.join(" ");
            break;
          case "four":
            classNamesArray.pop();
            classNamesArray.push("three");
            textElements[i].className = classNamesArray.join(" ");
            break;

          default:
            break;
        }
      }
    }, 300);