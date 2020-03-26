function KillThatProcess([string] $pName)
{
   $allProcesses = Get-Process $pName -ErrorAction 0

   if ($allProcesses -ne $null)
   {
        $pCount = $allProcesses.Count

        if ($pCount -gt 1)
        {
            $proceed = Read-Host -Prompt "There are $pCount processes with the name '$pName', proceed? (Y/N)"
        }
        else
        {
            $proceed = Read-Host -Prompt "There is $pCount process with the name '$pName', proceed? (Y/N)"
        }

        if ($proceed -eq "y")
        {
            $allProcesses | kill
            Write-Host "Killed all processes!" -BackgroundColor Green -ForegroundColor Black
        }
        else
        {
            Write-Host "Operation cancelled!" -BackgroundColor Red -ForegroundColor White
        }
   }
   else
   {
        Write-Host "No processes with the name '$pName' are open!"
   }
}

function Bamboozle
{
    Param
    (
        [string] $currentLocation = $PSScriptRoot + "\"
    )

    $messages = @(

    ("If you can read [A]ssembly language, everything is open source for you."),
    ("Ok but does anyone actually know how the hell [B]lack boxes (hidden layers) work??"),
    ("We all LOVE [C]oronavirus!"),
    ("Microsoft Teams -lt [D]iscord."),
    ("WHY IS MY FUNCTION NOT R[E]TURNING ANYTHING??? oh wait I never called it"),
    ("It's not a bug, it's a [F]eature."),
    ("Yup, it's [G]amer time."),
    ("Ivan is an epic [H]ackerman B)"),
    ("[I], for one, welcome our new insect overlords."),
    ("I was a wimp before Anchor Arms. Now, I'm a [J]erk and everybody loves me. So order now, wimp!"),
    ("Are you feeling it now Mr. [K]rabs?"),
    ("Is this [L]oss?"),
	("Wait Ivan plays [M]inecraft??"),
	("MongoDB is [N]ot good. (Seriously, don't go near it.)"),
	("S[O], two programmers walk into a foo."),
	("Oh, you're a [P]rogrammer? Name every code."),
	("Vive le [Q]uébec libre! (not really lol)"),
	("The glorious, golden rule of computer science: [R]TFM."),
	("[S]lack is a discord wannabe, change my mind."),
	("[T]he esoteric art of copy-pasting from Stack Overflow."),
	("In order to [U]nderstand recursion, you must first understand recursion."),
	("Goodbye e[V]eryone, I'll remember you all in therapy."),
	("You got it set to 'M' for mini, when it should be set to '[W]' for 'wumbo'."),
	("Uhhhhhhhh [X]ylophone"),
	("Did [Y]ou just call HTML a programming language?"),
	("[Z]ebra. That's all I got.")
)

    $alphabet = @()

    for ([byte]$c = [char]'A'; $c -le [char]'Z'; $c++)
    {
        $alphabet += [char]$c
    }

    $randomLetter = $alphabet | Get-Random -Count 1

    $messagesIndex = $alphabet.indexof($randomLetter)

    Write-Host $randomLetter

    Write-Host $messages[$messagesIndex] `n -BackgroundColor Green -ForegroundColor Black

    Get-ChildItem -Path $currentLocation -Filter *$randomLetter* -File | Remove-Item -WhatIf
}