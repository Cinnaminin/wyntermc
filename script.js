                function copyToClipboard() {
                    var textToCopy = "play.wyntermc.com";

                    var tempTextArea = document.createElement("textarea");

                    tempTextArea.value = textToCopy;

                    document.body.appendChild(tempTextArea);

                    tempTextArea.select();

                    document.execCommand("copy");

                    document.body.removeChild(tempTextArea);

                    var copyMessage = document.getElementById("copySvrIP");
                    copyMessage.style.display = "flex";
                    setTimeout(function () {
                        copyMessage.style.display = "none";
                    }, 2300);
                }