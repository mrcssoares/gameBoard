package com.example.marcos.gameboardquestion;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnCriarSala = (Button)findViewById(R.id.button_criar_sala);
        btnCriarSala.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                mostrarCriarSala();
            }
        });
        Button btnEntrarEmSala = (Button)findViewById(R.id.button_entrar_em_sala);
        btnEntrarEmSala.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                mostrarEntrarEmSala();
            }
        });

        Button btnSair = (Button)findViewById(R.id.button_sair);
        btnSair.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                sair();
            }
        });


    }

    public void mostrarCriarSala(){
        Intent intent = new Intent(this, Criar_sala_Activity.class);
        startActivity(intent);
    }

    public void mostrarEntrarEmSala(){
        Intent intent = new Intent(this, Entrar_em_sala_Activity.class);
        startActivity(intent);
    }

    public void sair(){
        this.finish();
    }
}
