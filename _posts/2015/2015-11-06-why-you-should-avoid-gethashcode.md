---
title: "Why You Should Avoid GetHashCode"
date: 2015-11-06 01:20:56
comments: true
categories: [Security, C#]
---

Recently while working on a new feature for SideWaffle, it came to my attention that I needed a way to get a consistent unique value to identify each user. The method has to be unique because we want to try and get a count for the number of people who use the extension. We also do not want to count the same person twice.

To do this it was recommended that I use the Object.GetHashCode method. However, soon afterwards it was pointed out that this method causes to many collisions. In short, a string's hash when attained using GetHashCode can have more than one hash. The [MSDN documentation](https://msdn.microsoft.com/en-us/library/system.string.gethashcode(v=vs.110).aspx) says the following regarding the GetHashCode method:

```text
If two strings are equal, the GetHashCode method returns identical values. However, there is not a unique hash code value for each unique string value. Different strings can return the same hash code.

Finally, do not use the hash code instead of a value returned by a cryptographic hashing function if you need a cryptographically strong hash.
```

You may be wondering how each string can have more than one hash. Looking at the documentation for the method's return type notice that the method returns the hash in a 32-bit signed integer, which means there are only 4,294,967,296 possible hashes. With only that many possible hashes we are certainly bound to end up with duplicates. These duplicates are what we call a collision.

There is however a solution to this problem. You can do like I did and create your own custom hash method. Below is the method I used to solve the problem. Feel free to use it in your project or even use it as a guideline to create your own custom hash method.

```csharp
using System;
using System.Security.Cryptography;
using System.Text;

public string GetHashString(string text)
{
    var hashType = new MD5CryptoServiceProvider();
    var hashBytes = Encoding.UTF8.GetBytes(text);
    var hash = hashType.ComputeHash(hashBytes);

    return BitConverter.ToString(hash).Replace("-", "");
}
```

***Disclaimer:*** This function uses the MD5 algorithm to create the hash. This algorithm is not recommended if you plan to use it with a login system. I'm far from being a security expert but it my understanding that the bcrypt algorithm is the current industry standard for use with login systems. However, please talk with a security expert before using any hashing algorithms in your login system.
