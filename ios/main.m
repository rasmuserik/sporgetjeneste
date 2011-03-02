//
//  main.m
//  AppDBC
//
//  Created by Rasmus Jensen on 2/28/11.
//  Copyright DBC 2011. All rights reserved.
//

#import <UIKit/UIKit.h>

int main(int argc, char *argv[]) {
    
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
    int retVal = UIApplicationMain(argc, argv, nil, @"AppDBCAppDelegate");
    [pool release];
    return retVal;
}
