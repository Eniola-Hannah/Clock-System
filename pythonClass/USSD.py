print("- MTN... EVERYWHERE YOU GO")
user = input("- ")
if user == "*131#":
    list1 = ["1. Data Plans", "2. Social Bundles", "3. Balance Check", "4. Borrow Credit/Recharge", "5. Gift Data", "6. Video Packs", "7. Hot Deals", "8. Chat Zigi"]
    for list in list1:
        print(list)
else:
    print("Invalid USSD Code")