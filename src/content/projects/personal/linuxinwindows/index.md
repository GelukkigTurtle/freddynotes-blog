---
title: "@Running Linux/Unix commands on Windows"
lede: "A solution to execute linux commands when your Java/Scala app is hosted in a Windows Server"
date: "2017"
order: 2
publish: true
lang: "Shell"
---


I was working in a Scala application that was designed to work in a Linux/Unix SO. This application makes a daily huge patch file of specific information. To make the patch file i was using directly the command diff with awk  with the
I was working in a Scala application that was designed to work in a Linux/Unix SO. This application makes a daily huge patch file of specific information. To make the patch file i was using directly the command diff with awk  with the Runtime class. Everything on Linux/Unix environment was OK, the problem began when the application was upload on a Windows Server, the application started to crash with the follow exception:

Follow the commands:
```js
“File does not exits =2”
```
I searched in the web about a diff command equivalent on Windows, i found the FC and COMP commands for bash but they weren’t enough powerful like the diff command, and using a Java library to make a diff it wasn’t the solution because they work with Strings and the files are too large and that makes a bad performance or other cases memory overflow.

The Solution:
1. INSTALL GIT ON WINDOWS
(Go to https://git-scm.com/download/win) Download and install it.

2. PUT THE EXECUTABLES IN YOUR WINDOWS PATH

3. OPEN THE CMD
You will be able to execute the sh command. To execute a linux command you need to put: sh -c command
```js
$ sh -c pwd
output: /root/your/working/dir

$ sh -c uname
output: YOUROS-#VERSION
```

In this case to solve my problem and make the diff command on windows, I developed the next Scala code and works perfectly.
```scala
val diffFile = new File("%s/%s.csv".format(AppConfig.processedDir, "patch-file"))

//sortedFile is the last generated file to be compared with the old file
//oldSortedFile is the old file
//diffFile is the result (a patch file) of making diference between the sortedFile and oldSortedFile

val command = "diff '%s' '%s' | awk -F   '< '  '{ print $2 }' > '%s'".format(sortedFile.getAbsoluteFile,
 oldSortedFile.getAbsoluteFile, diffFile.getAbsoluteFile)

 val shPath = AppConfig.shPath //Here you need to pass your sh.exe PATH
 val batchCommand = "\"%s\" -c \"%s\"".format(shPath, command)

 logger.debug("Execute in cmd: %s".format(batchCommand))
 val execute = Runtime.getRuntime().exec(batchCommand).waitFor()

```